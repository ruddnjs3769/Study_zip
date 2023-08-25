import Image from 'next/image';

export default function Home() {
  return (
    <>
      <h2>Welcome</h2>
      Hello, WEB!
      <br />
      <Image src="/aibot.jpg" alt="aibot" width="300" height="300" />
    </>
  );
}
