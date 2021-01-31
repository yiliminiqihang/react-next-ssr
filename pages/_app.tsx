//全局布局组件
/**
 * 
 * App组件是每个页面的根组件，页面切换时 App 不会销毁，但是里面的页面组件会销毁，因此可以利用这个来设置全局属性和样式
 * 全局 css 只能写在这里，否则会报错
 * 当页面变化时保持页面布局
 * 当路由变化时保持页面状态
 * 注入额外数据到页面里
*/
import App from 'next/app'
import { Layout, Menu } from 'antd'
import Link from 'next/link';
const { Header, Footer, Content } = Layout;
import { withRouter } from 'next/router'

class LayoutApp extends App {

    render() {
        let { Component } = this.props;
        return (
            <Layout>
                <Header>
                    我是头部
                    <ul>
                        <li><Link href="/"><a>首页</a></Link></li>
                        <li><Link href="/user" ><a>用户管理</a></Link></li>
                        <li><Link href="/profile"><a>个人中心</a></Link></li>
                    </ul>
                </Header>
                <Component>

                </Component>
                <Footer>
                    我是尾部
                </Footer>
            </Layout>
        )
    }
}

export default withRouter(LayoutApp);