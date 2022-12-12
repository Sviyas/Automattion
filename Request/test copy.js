const puppeteer = require('puppeteer'); // v13.0.0 or later

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const timeout = 0;
  page.setDefaultTimeout(timeout);

  {
    const targetPage = page;
    await targetPage.setViewport({ width: 1080, height: 713 });
  }
  {
    const targetPage = page;
    const promises = [];
    promises.push(targetPage.waitForNavigation());
    await targetPage.goto('https://danube-web.shop/');
    await Promise.all(promises);
  }
  {
    const targetPage = page;
    await scrollIntoViewIfNeeded(
      [
        ['aria/Top sellers'],
        ['#app-content > div > div.shop > div.shop-content > h2'],
        ['xpath///*[@id="app-content"]/div/div[1]/div[2]/h2'],
        ['text/Top sellers']
      ],
      targetPage,
      timeout
    );
    const element = await waitForSelectors(
      [
        ['aria/Top sellers'],
        ['#app-content > div > div.shop > div.shop-content > h2'],
        ['xpath///*[@id="app-content"]/div/div[1]/div[2]/h2'],
        ['text/Top sellers']
      ],
      targetPage,
      { timeout, visible: true }
    );
    await element.click({
      offset: {
        x: 134.35000610351562,
        y: 3.1875
      }
    });
  }
  {
    const targetPage = page;
    await scrollIntoViewIfNeeded(
      [['aria/LOG IN'], ['#login'], ['xpath///*[@id="login"]'], ['text/Log in']],
      targetPage,
      timeout
    );
    const element = await waitForSelectors(
      [['aria/LOG IN'], ['#login'], ['xpath///*[@id="login"]'], ['text/Log in']],
      targetPage,
      { timeout, visible: true }
    );
    await element.click({
      offset: {
        x: 42.9749755859375,
        y: 20.75
      }
    });
  }

  await browser.close();

  async function waitForSelectors(selectors, frame, options) {
    for (const selector of selectors) {
      try {
        return await waitForSelector(selector, frame, options);
      } catch (err) {
        console.error(err);
      }
    }
    throw new Error('Could not find element for selectors: ' + JSON.stringify(selectors));
  }

  async function scrollIntoViewIfNeeded(selectors, frame, timeout) {
    const element = await waitForSelectors(selectors, frame, { visible: false, timeout });
    if (!element) {
      throw new Error('The element could not be found.');
    }
    await waitForConnected(element, timeout);
    const isInViewport = await element.isIntersectingViewport({ threshold: 0 });
    if (isInViewport) {
      return;
    }
    await element.evaluate(element => {
      element.scrollIntoView({
        block: 'center',
        inline: 'center',
        behavior: 'auto'
      });
    });
    await waitForInViewport(element, timeout);
  }

  async function waitForConnected(element, timeout) {
    await waitForFunction(async () => {
      return await element.getProperty('isConnected');
    }, timeout);
  }

  async function waitForInViewport(element, timeout) {
    await waitForFunction(async () => {
      return await element.isIntersectingViewport({ threshold: 0 });
    }, timeout);
  }

  async function waitForSelector(selector, frame, options) {
    if (!Array.isArray(selector)) {
      selector = [selector];
    }
    if (!selector.length) {
      throw new Error('Empty selector provided to waitForSelector');
    }
    let element = null;
    for (let i = 0; i < selector.length; i++) {
      const part = selector[i];
      if (element) {
        element = await element.waitForSelector(part, options);
      } else {
        element = await frame.waitForSelector(part, options);
      }
      if (!element) {
        throw new Error('Could not find element: ' + selector.join('>>'));
      }
      if (i < selector.length - 1) {
        element = (await element.evaluateHandle(el => (el.shadowRoot ? el.shadowRoot : el))).asElement();
      }
    }
    if (!element) {
      throw new Error('Could not find element: ' + selector.join('|'));
    }
    return element;
  }

  async function waitForElement(step, frame, timeout) {
    const count = step.count || 1;
    const operator = step.operator || '>=';
    const comp = {
      '==': (a, b) => a === b,
      '>=': (a, b) => a >= b,
      '<=': (a, b) => a <= b
    };
    const compFn = comp[operator];
    await waitForFunction(async () => {
      const elements = await querySelectorsAll(step.selectors, frame);
      return compFn(elements.length, count);
    }, timeout);
  }

  async function querySelectorsAll(selectors, frame) {
    for (const selector of selectors) {
      const result = await querySelectorAll(selector, frame);
      if (result.length) {
        return result;
      }
    }
    return [];
  }

  async function querySelectorAll(selector, frame) {
    if (!Array.isArray(selector)) {
      selector = [selector];
    }
    if (!selector.length) {
      throw new Error('Empty selector provided to querySelectorAll');
    }
    let elements = [];
    for (let i = 0; i < selector.length; i++) {
      const part = selector[i];
      if (i === 0) {
        elements = await frame.$$(part);
      } else {
        const tmpElements = elements;
        elements = [];
        for (const el of tmpElements) {
          elements.push(...(await el.$$(part)));
        }
      }
      if (elements.length === 0) {
        return [];
      }
      if (i < selector.length - 1) {
        const tmpElements = [];
        for (const el of elements) {
          const newEl = (await el.evaluateHandle(el => (el.shadowRoot ? el.shadowRoot : el))).asElement();
          if (newEl) {
            tmpElements.push(newEl);
          }
        }
        elements = tmpElements;
      }
    }
    return elements;
  }

  async function waitForFunction(fn, timeout) {
    let isActive = true;
    const timeoutId = setTimeout(() => {
      isActive = false;
    }, timeout);
    while (isActive) {
      const result = await fn();
      if (result) {
        clearTimeout(timeoutId);
        return;
      }
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    throw new Error('Timed out');
  }
})().catch(err => {
  console.error(err);
  process.exit(1);
});

