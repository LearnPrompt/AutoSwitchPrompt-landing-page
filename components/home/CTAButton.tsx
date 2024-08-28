import { Button } from "@/components/ui/button";
import Link from "next/link";
import { RocketIcon } from "lucide-react";

const CTAButton = ({ locale }: { locale: any }) => {
  return (
    <Link
      href="https://aiwarts101.feishu.cn/wiki/LyYawoBUviAaSrknQBYcVzkoncf?from=from_copylink"
      target="_blank"
      rel="noopener noreferrer nofollow"
    >
      <Button
        variant="default"
        className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white"
        aria-label="Get Boilerplate"
      >
        <RocketIcon />
        {locale.title}
      </Button>
    </Link>
  );
};

export default CTAButton;
