type Env = {
  production: boolean
};

type WidgetData = {
  'img': string,
  'type': string
  'title': string,
  'weather': Weather,
  'info': Info
};

type Weather = {
  'title': string,
  'water': number,
  'temperature': number
};

type Info = {
  'title': string,
  'img': string,
  'followers': number,
  'following': number
};
