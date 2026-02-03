'use client'
import {
    Card,
    CardTitle,
    CardHeader,
    CardContent
} from "@/components/ui/card";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher";
import useMediaQuery from "@/hook/useMediaQuery";

interface AboutMeProps {
    about: string;
}

export const AboutMe = ({ about }: AboutMeProps) => {
    const isDesktopOrLaptop = useMediaQuery("(min-width: 1224px)");
    
    return (
        <Card className="mb-6">
            <CardHeader className="flex flex-row justify-between items-baseline">
                <CardTitle>About Me</CardTitle>
                {isDesktopOrLaptop && <ThemeSwitcher />}
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">
                    {about}
                </p>
            </CardContent>
        </Card>
    );
}