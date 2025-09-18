import { SvgProps } from "react-native-svg";

// Feature Assets
import PayIcon from "@/assets/icons/features/pay.svg";
import TopUpIcon from "@/assets/icons/features/topUp.svg";
import TransferIcon from "@/assets/icons/features/transfer.svg";
import WithdrawIcon from "@/assets/icons/features/withdraw.svg";

// Transaction Assets
import PaypalIcon from "@/assets/icons/transactions/paypal.svg";
import SpotifyIcon from "@/assets/icons/transactions/spotify.svg";

export const ICON_MAP: Record<string, React.FC<SvgProps>> = {
  SpotifyIcon,
  PaypalIcon,
  PayIcon,
  TopUpIcon,
  TransferIcon,
  WithdrawIcon,
};
