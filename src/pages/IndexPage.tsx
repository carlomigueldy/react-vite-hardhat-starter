import { Box, Text } from "@chakra-ui/layout";
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
        <Text fontSize="4xl">WAGMI</Text>
        <button onClick={() => router.push("/wagmi")}>To NotFoundPage</button>
      </Box>
    </>
  );
}
