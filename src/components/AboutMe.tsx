'use client'
import {
    Card,
    CardTitle,
    CardHeader,
    CardContent
} from "@/components/ui/card";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher";
import useMediaQuery from "@/hook/useMediaQuery";
import {CONFIG} from "@/global-config";


export const AboutMe = () => {
    const isDesktopOrLaptop  = useMediaQuery("(min-width: 1224px)");
    return (    

    <Card className="mb-6">
        <CardHeader className="flex flex-row justify-between items-baseline">
            <CardTitle>About Me</CardTitle>
            {isDesktopOrLaptop && <ThemeSwitcher />}
        </CardHeader>
        <CardContent>
            <p className="text-muted-foreground">
                {CONFIG.about}
            </p>
        </CardContent>
    </Card>
    )
}