import Link from 'next/link';
export default function Menuitem({title, address, Icon}) {
    return (
        <Link href={address}>
          <Icon className="sm:hidden"/>
           <p className='uppercase hidden sm:inline'>{title}</p>
        </Link>            
    );

}