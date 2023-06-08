const Layout = ({ children }) => {
  // Este contenedor puede recibir varios componentes el cual será la capa principal en App recibiendo
  // como props a los elementos hijos (childrens)
  return <div className="layout">{children}</div>;
};

export default Layout;
