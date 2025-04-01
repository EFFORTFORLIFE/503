export async function getServerSideProps() {
    // 从上下文中获取请求信息
    // const { req, res, query } = context;
  
    // 返回数据作为 props
    return {
      props: {
        data: 'data', // 将数据传递给页面组件
      },
    };
  }

  const Center = (props) => {
    alert('lksdf ', props)
    return (
        <div>
            center
        </div>
    )
  }

  export default  Center