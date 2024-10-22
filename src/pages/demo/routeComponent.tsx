import MicroApp from 'micro-app-tools/react18/MicroApp';

function routeComponent() {
  return (
    <>
      <div>
        <section className="-m-card lightgoldenrodyellow">
          <h3 className="-m-title">在react中访问vue3路由</h3>
          <span>ps：同时vue3页面使用了派发组件</span>
        </section>
        <MicroApp
          _prefix="react-1-"
          _name="vue3"
          _path="/vue3/#/home"
        ></MicroApp>
        <MicroApp
          _prefix="react-2-"
          _name="vue3"
          _path="/vue3/#/demo/micromainComponent"
        ></MicroApp>

        <section className="-m-card lightgoldenrodyellow">
          <h3 className="-m-title">在react中访问vue2路由</h3>
          <span>ps：同时vue2页面使用了派发组件</span>
        </section>
        <MicroApp
          _prefix="react-3-"
          _name="vue2"
          _path="/vue2/#/home"
        ></MicroApp>
      </div>
    </>
  );
}

export default routeComponent;
