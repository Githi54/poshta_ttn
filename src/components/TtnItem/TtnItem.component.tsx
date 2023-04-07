import { TTN } from "../../types/ttn.type"

type Props = {
  ttn: TTN;
}

export const TtnItem: React.FC<Props> = ({ ttn }) => {
    return <p>{ttn.Status}</p>
};
