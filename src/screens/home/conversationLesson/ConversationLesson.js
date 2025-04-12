import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import HeaderTopic from "../../../components/header/HeaderTopic";
import Question from "../../question/Question";
import Answer from "../../../components/conversation/Answer";
import { icon_remove } from "./../../../assets/svg/iconTabNavigation/icon_remove";

export default function ConversationLesson() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <HeaderTopic
          icon={icon_remove}
          uriImg="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdno2YzBwcWRkNmF1eXJ2enVhZmY2ZGpkNmJ4bDAzcmtnbWR5cTJweCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/ELrhLxEdwWUXuyYPQW/giphy.gif"
          ItemNumberTopic="PHẦN 1, CỬA 1"
          NameTopic="Gọi đồ uống"
          title="CỤM TỪ CHÍNH"
        />
        <Question
          prototypeQuestion="Hello, Ben!"
          translateQuestion="Xin chào, Ben!"
        />
        <Answer
          prototypeAnswer="Hello, coffee, please!"
          translateAnswer="Xin chào, Vui lòng cho tôi cafe!"
        />
        <Question
          prototypeQuestion="Hello, Ben!"
          translateQuestion="Xin chào, Ben!"
        />
        <Answer
          prototypeAnswer="Hello, coffee, please!"
          translateAnswer="Xin chào, Vui lòng cho tôi cafe!"
        />
        <Question
          prototypeQuestion="Hello, Ben!"
          translateQuestion="Xin chào, Ben!"
        />
        <Answer
          prototypeAnswer="Hello, coffee, please!"
          translateAnswer="Xin chào, Vui lòng cho tôi cafe!"
        />
        <Question
          prototypeQuestion="Hello, Ben!"
          translateQuestion="Xin chào, Ben!"
        />
        <Answer
          prototypeAnswer="Hello, coffee, please!"
          translateAnswer="Xin chào, Vui lòng cho tôi cafe!"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 10,
  },
});
