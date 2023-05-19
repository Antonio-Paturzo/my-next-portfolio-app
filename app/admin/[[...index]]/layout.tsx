export const metadata = {
  title: "Antonio's Admin Page",
  description: "This is the admin page for Antonio's website.",
};

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default AdminLayout;
