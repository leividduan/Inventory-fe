import Input from '../components/Input';
import LayoutLogin from '../components/LayoutLogin';

function Login() {
  const error = { message: 'E-mail inválido'};
  return (
    <LayoutLogin>
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Faça o login na plataforma
      </h1>
      <form className="space-y-4 md:space-y-6" action="#">
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Seu email</label>
          <Input type="email" name="email" id="email" placeholder="name@company.com" required />
        </div>
        <div>
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Senha</label>
          <Input type="password" name="password" id="password" placeholder="••••••••" required />
        </div>
        <div className="mt-0.5">
          <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Esqueci minha senha</a>
        </div>
        <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Entrar</button>
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Ainda não possui conta? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Faça o cadastro!</a>
        </p>
      </form>
    </LayoutLogin>

  );
}
 
export default Login;