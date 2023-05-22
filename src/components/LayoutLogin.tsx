import { ReactElement } from 'react';

interface LayoutType {
  children: ReactElement[]
}

function Layout({children}:LayoutType) {
  return (
    <section>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Layout;