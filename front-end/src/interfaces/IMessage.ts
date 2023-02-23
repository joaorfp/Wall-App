export default interface IMessage {
  id?: number | undefined;
  title: string;
  message: string;
  owner?: string;
  isOwner?: boolean;
}
