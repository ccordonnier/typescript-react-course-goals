import { PropsWithChildren } from "react"

type HintBoxProps = {
    mode: "hint";
}

type WarningBoxProps = {
    mode: "warning",
    severity: "low" | "medium" | "hight"
}

type InfoBoxProps = HintBoxProps | WarningBoxProps;

export default function InfoBox(props: PropsWithChildren<InfoBoxProps>) { //info, warning
    const {children, mode} = props;
    if (mode === "hint") {
        return (
            <aside className="infobox infobox-hint">
                <p>{children}</p>
            </aside>
        )
    }

    const { severity } = props;
    return (
        <aside className={`infobox infobox-warning warning--${severity}`}>
            <h2>Warning</h2>
            <p>{children}</p>
        </aside>
    )
}