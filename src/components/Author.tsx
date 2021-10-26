import { Text } from "@chakra-ui/layout";
import { Link } from "@chakra-ui/react";

export function Author() {
  return (
    <>
      <Text fontSize="2xl">
        <Link href="https://twitter.com/CarloMiguelDy" target="_blank">
          carlomigueldy.eth
        </Link>
      </Text>
    </>
  );
}
