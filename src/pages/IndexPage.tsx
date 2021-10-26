import { Button } from "@chakra-ui/button";
import { Box, Text } from "@chakra-ui/layout";
import { Author } from "../components/Author";
import { useRouter } from "../hooks/useRouter.hook";

export default function IndexPage() {
  const router = useRouter();

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
        </Box>
      </Box>
    </>
  );
}
