package com.four;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.rntensorflow.RNTensorFlowPackage;
import com.gettipsi.stripe.StripeReactPackage;
import com.rnfs.RNFSPackage;
import fr.snapp.imagebase64.RNImgToBase64Package;
import com.mkuczera.RNReactNativeHapticFeedbackPackage;
import fr.greweb.reactnativeviewshot.RNViewShotPackage;
import iyegoroff.RNColorMatrixImageFilters.ColorMatrixImageFiltersPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new RNTensorFlowPackage(),
            new StripeReactPackage(),
            new RNFSPackage(),
            new RNImgToBase64Package(),
            new RNReactNativeHapticFeedbackPackage(),
            new RNViewShotPackage(),
            new ColorMatrixImageFiltersPackage(),
            new VectorIconsPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
