import Sidebar from '../backPanel/Sidebar';
export default function BackPanelLayout({ children }) {
  return (
    <div>
      <Sidebar />
      <main>{children}</main>
    </div>
  );
}
