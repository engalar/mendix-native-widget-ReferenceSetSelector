# mendix 前端组件开发模板库

重命名
[diff](https://github.com/engalar/mendix-native-widget-upload/compare/aec86ca62b5beba65e5cc20cee54bffde98a668c...98d0e4ba09399c7276b90179001f6b129bce27a5)

# 创建脚手架

```cmd
curl https://gitee.com/engalar/mendix-pluggable-widget-template/raw/master/script/new_pw.bat -o temp && type temp | more /p > new_pw.bat && del /f temp && call new_pw.bat
```

# 试用

```cmd
curl https://gitee.com/engalar/mendix-pluggable-widget-template/raw/master/script/try_pw.bat -o temp2 && type temp2 | more /p > try_pw.bat && del /f temp2 && call try_pw.bat
```

# bundle android res

```cmd
"C:\Program Files\Mendix\9.6.0.27784\modeler\mxbuild.exe" --java-home="%JAVA_HOME%" --java-exe-path="%JAVA_HOME%/bin/java.exe" --target=deploy --native-packager --loose-version-check tests\testProject\testProject.mpr
```
