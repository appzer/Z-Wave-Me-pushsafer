![Pushsafer](https://www.pushsafer.com/de/assets/logos/logo.png)

Send Push-Notifications by [pushsafer.com](https://www.pushsafer.com) to iOS, Android and Windows 10 devices out of Z-Wave.me home-automation

Pushsafer make it easy and safe to get push-notifications in real time on your
- Android device
- iOS device (incl. iPhone, iPad, iPod Touch)
- Windows 10 Phone & Desktop
- Browser (Chrome & Firefox)

## Usage

### Download

	git:github.com/appzer/Z-Wave-Me-pushsafer.git
	
	https://github.com/appzer/Z-Wave-Me-pushsafer
	
### Install

Download and copy the files to 
```javascript
/opt/z-way-server/automation/userModules/NotificationPushsafer
```

check the access rights of the folder userModules
```javascript
ls -l /opt/z-way-server/automation/
```

If you get
```javascript
drwxr-xr-x 12 pi pi  4096 Jan  6 15:56 userModules
```
everything is OK

If not run the following command
```javascript
sudo chown -R pi:pi /opt/z-way-server/automation/userModules
```

Now restart the z-way server, then the module should be available
```javascript
sudo service z-way-server restart
```