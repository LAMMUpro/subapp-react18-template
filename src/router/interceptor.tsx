import { useEffect } from "react";
import { matchRoutes, useNavigate } from "react-router-dom";
import { baseRoutes } from './index';

const Interceptor = ({ children, auth }: any) => {
  const navigate = useNavigate();
  // TODO 获取路由信息
  // const token = localStorage.getItem("blogToken") || "";
  // const loginState = useSelector((state: any) => state.public.loginState);
  const mathchs = matchRoutes(baseRoutes, location);

  const isExist = mathchs?.some((item) => item.pathname == location.pathname);

  useEffect(() => {
    // TODO 判断是否登录
    // if (token == "" && auth) {
    //   message.error("token 过期，请重新登录!");
    //   navigate("/login");
    // }
    // 这里判断条件是：token 存在并且是匹配到路由并且是已经登录的状态
    if (isExist) {
      // 如果你已经登录了，但是你通过浏览器里直接访问login的话不允许直接跳转到login路由，必须通过logout来控制退出登录或者是token过期返回登录界面
      if (location.pathname == "/" || location.pathname == "/login") {
        navigate("/home");
      } else {
        // 如果是其他路由就跳到其他的路由
        // navigate('/demo/micromainComponent',{replace:true});
      }
    }
  }, [location.pathname]);

  return children;
};

export default Interceptor
