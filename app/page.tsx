import Heading from './components/Heading';

export const metadata = {
  title: 'Praxis Website - Home',
  description: 'Home descr',
  keywords: ['praxis website', 'doctor'],
  applicationName: 'Praxis Website Nextjs',
  colorScheme: 'dark',
  creator: 'Aleksej Domovec',
  generator: 'Next.js',
  authors: [{name: 'Aleksej Domovec'},{name: 'Inhaber blabla'}],
  publisher: 'Aleksej Domovec',
}
 

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 home-page">
      <div className='d-flex justify-content-center fixed-bottom-text text-secondary bg-light'>
         <Heading>Welcome</Heading>
      </div>
    </main>
  );
}
