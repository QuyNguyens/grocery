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

type CouponCodeProps = {
  setCouponCode: React.Dispatch<React.SetStateAction<string>>;
};

export default function CouponCode({ setCouponCode }: CouponCodeProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <span onClick={onOpen} className="underline">
        Add coupon
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
                  onChange={(e: any) => setCouponCode(e.target.value)}
                  type="text"
                  placeholder="Enter your coupon..."
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button className='text-white! font-semibold' color="success" onPress={onClose}>
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
