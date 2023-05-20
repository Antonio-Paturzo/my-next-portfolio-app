export const metadata = {
  title: "Antonio's Admin Page",
  description: "This is the admin page for Antonio's website.",
  url: "https://antoniopaturzo.me/admin",
  viewport: "width=device-width, initial-scale=1",
};

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default AdminLayout;
