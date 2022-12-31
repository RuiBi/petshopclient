import {PropsWithChildren} from "react";
import {Container} from "react-bootstrap";

interface PageProps extends PropsWithChildren {
    title?: string;
}
export function Page({ title, children }: PageProps) {
    return (
        <div className="page">
            {title && <h1 className="h3">{title}</h1>}
            <Container fluid="xxl">
                {children}
            </Container>
        </div>
    );
}