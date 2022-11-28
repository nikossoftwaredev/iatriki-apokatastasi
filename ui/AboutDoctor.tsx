import Image from 'next/image';
import doctorImage from 'public/images/iatros.jpg';
import Card from 'ui/Card';
import Link from 'next/link';
import { knowledge } from 'data/knowledge';

const knowledgeLength = knowledge.length / 2;

const firstColumn = knowledge.splice(0, knowledgeLength);
const secondColumn = knowledge.splice(-knowledgeLength);

const AboutDoctor = (): JSX.Element => {
  return (
    <main className='w-full flex flex-col items-center justify-center mt-10'>
      <Card className='xl:w-2/4 md:w-3/4 items-center justify-center p-5'>
        {/* <IconTitle title='O ΓΙΑΤΡΟΣ' icon={<MdInfoOutline size={30} />} /> */}
        <section className='grid grid-cols-3 gap-10 justify-center items-center'>
          <div className='h-full max-h-96 relative col-span-1'>
            <Image src={doctorImage} alt='iatros' className='rounded-xl w-full' />
          </div>
          <div className='flex flex-col col-span-2'>
            <span>
              Αγαπητοί φίλοι,
              <br /> Μετά από πολλά χρόνια που προσφέρουμε με συνέπεια τις υπηρεσίες μας στον τομέα
              της Αποκατάστασης, σας υπενθυμίζουμε ότι το ιατρείο και φυσικοθεραπευτήριο διευθύνεται
              από <strong>ειδικό ιατρό αποκατάστασης-φυσίατρο-αθλητίατρο</strong> με εξειδικευμένες
              γνώσεις για: <br />
              <br />
            </span>
            <div className='grid grid-cols-2'>
              <ul className='list-disc'>
                {firstColumn.map(k => (
                  <li key={k.title}>{k.title}</li>
                ))}
              </ul>
              <ul className='list-disc'>
                {secondColumn.map(k => (
                  <li key={k.title}>{k.title}</li>
                ))}
              </ul>
            </div>

            <br />

            <Link href='/services' className='text-blue hover:text-black'>
              Υπηρεσίες που προσφέρουμε...
            </Link>
          </div>
        </section>
      </Card>
    </main>
  );
};

export default AboutDoctor;
