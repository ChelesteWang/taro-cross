# taro-cross
使用 taro 跨 react native , h5 , 小程序

## 跨端要注意的一些点
1. 样式一致性问题
2. 如果兼容不同平台样式（RN first）
3. 如何进行组件及样式复用
4. 如何进行网络请求
5. 如何在跨端场景进行状态管理
6. 跨端中如何处理不同环境导致的 runtime 有所不同
7. 一些在原生应用中不支持的组件如何解决
8. 如何进行调试（h5 first , taro playground）

## 踩坑记录

先 upgradePeerdeps 安装一下 react-native 需要的 peerDependence

M1 无法使用 pod install

```shell
sudo gem install cocoapods
sudo arch -x86_64 gem install ffi
cd ios
arch -x86_64 pod install
```

RN 兼容样式方案
