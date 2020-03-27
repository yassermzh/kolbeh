import React from "react";
import { StyleSheet, Text, TextProperties } from "react-native";
import messages from "../../utils/fa";

const MessagesContext = React.createContext(messages);

const MessagesProvider: React.FC = (props) => {
  return (
    <MessagesContext.Provider value={messages}>
      {props}
    </MessagesContext.Provider>
  );
};

type Props = {
  id: string;
};
const FormattedText: React.FC<TextProperties & Props> = ({ id, ...props }) => {
  const messages = React.useContext(MessagesContext);
  return <Text {...props}>{messages[id]}</Text>;
};

export { MessagesProvider, FormattedText };

// import { FormattedMessage } from "react-intl";

// type Props = {
//   style?: any;
//   id: string;
// };

// const MyText: React.FC<Props> = ({ style, id }) => (
//   <Text style={[styles.persian, style]}>
//     <FormattedMessage id={id} />
//   </Text>
// );

// const styles = StyleSheet.create({
//   persian: {
//     fontFamily: "IRANYekanRDMobile",
//     textAlign: "left",
//   },
// });

// export default MyText;