export default class Settings {
  constructor() {
    this.defaultSettings = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);

    this.userSettings = new Map();
  }

  setSettings(param, value) {
    this.userSettings.set(param, value);
  }

  getSettings() {
    const settings = new Map();
    this.defaultSettings.forEach((val, key) => {
      if (this.userSettings.has(key)) {
        const value = this.userSettings.get(key);
        settings.set(key, value);
      } else {
        settings.set(key, val);
      }
    });
    return settings;
  }
}
