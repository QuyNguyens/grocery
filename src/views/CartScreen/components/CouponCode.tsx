import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from '@heroui/react';
import { useState } from 'react';

type CouponCodeProps = {
  couponCode: string;
  setCouponCode: React.Dispatch<React.SetStateAction<string>>;
};

export default function CouponCode({ couponCode, setCouponCode }: CouponCodeProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [localCode, setLocalCode] = useState<string>(couponCode);

  return (
    <>
      <span onClick={onOpen} className="underline">
        {couponCode ? 'change' : 'Add coupon'}
      </span>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-center">
                Enter Your Coupon
              </ModalHeader>
              <ModalBody>
                <Input
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setLocalCode(e.target.value)
                  }
                  value={localCode}
                  type="text"
                  placeholder="Enter your coupon..."
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  onPress={() => {
                    setCouponCode(localCode);
                    onClose();
                  }}
                  className="text-white! font-semibold"
                  color="success"
                >
                  Add
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
