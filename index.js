/*** NotificationPushsafer Z-Way HA module *******************************************

Version: 1.0.0
(c) 2016 Appzer.de
-----------------------------------------------------------------------------
Author: Kevin Siml
Description: Send Push Notification by Pushsaver.com Service
******************************************************************************/

// ----------------------------------------------------------------------------
// --- Class definition, inheritance and setup
// ----------------------------------------------------------------------------

function NotificationPushsafer (id, controller) {
    // Call superconstructor first (AutomationModule)
    NotificationPushsafer.super_.call(this, id, controller);
}

inherits(NotificationPushsafer, AutomationModule);

_module = NotificationPushsafer;

// ----------------------------------------------------------------------------
// --- Module instance initialized
// ----------------------------------------------------------------------------

NotificationPushsafer.prototype.init = function (config) {
    NotificationPushsafer.super_.prototype.init.call(this, config);

    var self = this;

    this.vDev = this.controller.devices.create({
        deviceId: "NotificationPushsafer_" + this.id,
		defaults: {
            deviceType: "toggleButton",
            //deviceType: "switchBinary",
			// in case you want to use if<>then you may want to switch devicetype "switchBinary" to handle events
			metrics: {
                level: 'on', // it is always on, but usefull to allow bind
                icon: '',
                title: 'NotificationPushsafer ' + this.id
            }
        },
        overlay: {},
        handler: function () {
            // If Private Keys and Message for Pushsafer exist, then send message
            if (self.config.private_key_token && self.config.message) {
                http.request({
                    method: 'POST',
                    url: "https://www.pushsafer.com/api",
                    data: {
                        k: self.config.private_key_token,
						m: self.config.message,
						t: self.config.message_title,
						d: self.config.device,
						i: self.config.icon,
						s: self.config.sound,
						v: self.config.vibration
                    }
                });
            }

            self.vDev.set("metrics:level", "on"); // update on ourself to allow catch this event
        },
        moduleId: this.id
    });
};

NotificationPushsafer.prototype.stop = function () {
    if (this.vDev) {
        this.controller.devices.remove(this.vDev.id);
        this.vDev = null;
    }

    NotificationPushsafer.super_.prototype.stop.call(this);
};

// ----------------------------------------------------------------------------
// --- Module methods
// ----------------------------------------------------------------------------
