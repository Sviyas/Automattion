pi_value InstanceMethodCallbackWrapper(napi_env env, napi_callback_info info);
    static napi_value InstanceGetterCallbackWrapper(napi_env env, napi_callback_info info);
    static napi_value InstanceSetterCallbackWrapper(napi_env env, napi_callback_info info);

    template <InstanceSetterCallback method>
    static napi_value WrappedMethod(napi_env env,
                                    napi_callback_info info) NAPI_NOEXCEPT;

    template <InstanceSetterCallback setter> struct SetterTag {};

    template <InstanceSetterCallback setter>
    static napi_callback WrapSetter(SetterTag<setter>) NAPI_NOEXCEPT {
      return &This::WrappedMethod<setter>;
    }
    static napi_callback WrapSetter(SetterTag<nullptr>) NAPI_NOEXCEPT {
      return nullptr;
    }
  };

  /// Base class to be extended by C++ classes exposed to JavaScript; each C++ class instance gets
  /// "wrapped" by a JavaScript object that is managed by this class.
  ///
  /// At initialization time, the `DefineClass()` method must be used to
  /// hook up the accessor and method callbacks. It takes a list of
  /// property descriptors, which can be constructed via the various
  /// static methods on the base class.
  ///
  /// #### Example:
  ///
  ///     class Example: public Napi::ObjectWrap<Example> {
  ///       public:
  ///         static vo