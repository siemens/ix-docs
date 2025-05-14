```tsx
import {
  IxButton,
  IxModalContent,
  IxModalFooter,
  IxModalHeader,
  Modal,
  ModalRef,
  showModal,
} from '@siemens/ix-react';
import { useRef } from 'react';

function CustomModal() {
  const modalRef = useRef<ModalRef>(null);

  const close = () => {
    modalRef.current?.close('close payload!');
  };
  const dismiss = () => {
    modalRef.current?.dismiss('dismiss payload');
  };

  return (
    <Modal ref={modalRef}>
      <IxModalHeader onCloseClick={() => dismiss()}>
        Message headline
      </IxModalHeader>
      <IxModalContent>Message text lorem ipsum</IxModalContent>
      <IxModalFooter>
        <IxButton outline onClick={() => dismiss()}>
          Cancel
        </IxButton>
        <IxButton onClick={() => close()}>OK</IxButton>
      </IxModalFooter>
    </Modal>
  );
}

export default () => {
  async function show() {
    await showModal({
      content: <CustomModal />,
    });
  }

  return (
    <>
      <IxButton onClick={show}>Show modal</IxButton>
    </>
  );
};
```
