import { LoginForm } from "@/components/auth/login-form";

interface Props {
  searchParams: {
    error: string;
  };
}

const LoginPage = ({ searchParams: { error } }: Props) => {
  return (
    <div className="container grid h-full place-items-center">
      <LoginForm searchParamError={error} />
    </div>
  );
};

export default LoginPage;
