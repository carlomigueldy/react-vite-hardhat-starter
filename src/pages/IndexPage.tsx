import { Button } from "@chakra-ui/button";
import { Box, Text } from "@chakra-ui/layout";
import { Author } from "../components/Author";
import { useSmartContract } from "../composables/useSmartContract";
import { useRouter } from "../hooks/useRouter.hook";

export default function IndexPage() {
  const router = useRouter();
  const contract = useSmartContract();

  function setHelloWorld() {
    contract.setHelloWorld("gm friends");
  }

  return (
    <>
      <Box
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box>
          <Text fontSize="4xl">WAGMI</Text>
          <Button onClick={() => router.push("/wagmi")}>To NotFoundPage</Button>
          <Author />
          <Text onClick={setHelloWorld}>{contract.helloWorld ?? 'Hello'}</Text>
        </Box>
      </Box>
    </>
  );
}
