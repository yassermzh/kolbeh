import React from "react";
import { StyleSheet, Text, TextProperties, Platform } from "react-native";
import messages from "utils/fa";

const MessagesContext = React.createContext(messages);

const MessagesProvider: React.FC = (props) => {
  return (
    <MessagesContext.Provider value={messages}>
      {props}
    </MessagesContext.Provider>
  );
};

type Props = {
  id?: string;
};
const FormattedText: React.FC<TextProperties & Props> = ({
  style,
  id,
  ...props
}) => {
  const _messages = React.useContext(MessagesContext);
  if (id) {
    return (
      <Text style={[styles.persian, style]} {...props}>
        {_messages[id]}
      </Text>
    );
  } else {
    return <Text style={[styles.persian, style]} {...props} />;
  }
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

const styles = StyleSheet.create({
  persian: {
    fontFamily: "IRANYekanRDMobile",
    textAlign: "left",
    paddingTop: Platform.OS === "ios" ? 7 : 2,
  },
});

// export default MyText;
