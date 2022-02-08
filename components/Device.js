import Link from 'next/link';

export default function Device({ person }) {
  return (
    <li>
      <Link href="/device/[id]" as={`/device/${device.key}`}>
        <a>{device.key}</a>
      </Link>
    </li>
  );
}
