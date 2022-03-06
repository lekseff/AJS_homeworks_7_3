import Settings from '../app';

test('Установка настроек', () => {
  const settings = new Settings();
  const expected = new Map([['music', 'pop']]);
  settings.setSettings('music', 'pop');
  expect(settings.userSettings).toEqual(expected);
});

test('Получение данных', () => {
  const settings = new Settings();
  const expected = new Map([
    ['theme', 'dark'],
    ['music', 'pop'],
    ['difficulty', 'hard'],
  ]);
  settings.setSettings('music', 'pop');
  settings.setSettings('difficulty', 'hard');
  expect(settings.getSettings()).toEqual(expected);
});
