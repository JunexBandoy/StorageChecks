import { useState } from 'react';

import { Page1 } from './page1';
import { Page2 } from './Page2';
import { Page4 } from './page4';
import { PDSpage3 } from './PDSpage3';

import { ModalDocs } from '@components/forms/ModalDocs';

export const PDS = () => {
  const [trigger, setTrigger] = useState<number | null>(null);

  const showPage = (page: number) => {
    setTrigger(page);
  };

  const hidePage = () => {
    setTrigger(null);
  };
  return (
    <>
      <button className="bg-green-200 p-2 m-2 " onClick={() => showPage(1)}>
        Page1
      </button>
      {trigger === 1 && (
        <ModalDocs show={true}>
          <Page1
            onClick={() => {
              hidePage();
            }}
          />
        </ModalDocs>
      )}
      <button className="bg-blue-200 p-2 m-2" onClick={() => showPage(2)}>
        Page2
      </button>
      {trigger === 2 && (
        <ModalDocs show={true}>
          <Page2
            onClick={() => {
              hidePage();
            }}
          />
        </ModalDocs>
      )}

      <button className="bg-blue-200 p-2 m-2" onClick={() => showPage(3)}>
        Page3
      </button>
      {trigger === 3 && (
        <ModalDocs show={true}>
          <PDSpage3
            onClick={() => {
              hidePage();
            }}
          />
        </ModalDocs>
      )}

      <button className="bg-blue-200 p-2 m-2" onClick={() => showPage(4)}>
        Page4
      </button>
      {trigger === 4 && (
        <ModalDocs show={true}>
          <Page4
            onClick={() => {
              hidePage();
            }}
          />
        </ModalDocs>
      )}
    </>
  );
};
