import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return ['Yukihiro Matsumoto', 'Brendan Eich', 'Josh Nixon']
  }
});
