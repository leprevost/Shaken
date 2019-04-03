To be able to use geolocation on an Android device or emulator,
first build to Android, then manually add permissions under
/platforms>android>app>src>main/AndroidManifest.xml
and add these lines:

  <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION"/>
  <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"/>

