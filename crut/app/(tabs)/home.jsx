import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import Header from '../../components/Home/Header';
import AiFeaturemodels from '../../components/Home/AiFeaturemodels';
import AvatarModels from '../../components/Home/AvatarModels';

const PictifyAI = () => {

  const avatar = [
    'https://cdn.pixabay.com/photo/2023/06/23/11/23/ai-generated-8083323_640.jpg',
    'https://cdn.kwork.com/files/portfolio/t3/09/dbe21dc5aa5a614f57f48b50768f7b06deb964e1-1711803728.jpg',
    'https://i.redd.it/3jqjwhk1uiyb1.jpg',
    'https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/c5073561-fbb4-4ea2-ba66-5e701e764e9b/f9ac9a5f-e86c-44b3-847c-9acdb835e0d9.png',
    'https://img.freepik.com/premium-photo/lord-narsimha-entire-body-action-fighting_1003686-14027.jpg',
    'https://img.freepik.com/premium-photo/woman-with-long-hair-shirt-with-tie-that-says-she-is-wearing-shirt_662214-122077.jpg'
  ]

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <Header />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false} >
        {/* Search or Prompt Input Section */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type your prompt here..."
            placeholderTextColor="#7A7A7A"
          />
          <TouchableOpacity style={styles.generateButton}>
            <Text style={styles.generateButtonText}>Generate</Text>
          </TouchableOpacity>
        </View>

        {/* Options Section */}
        <Text style={styles.sectionTitle}>Features</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.options}>
          {/* <TouchableOpacity style={styles.optionButton}>
            <Text style={styles.optionText}>Text to Image</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton}>
            <Text style={styles.optionText}>Avatar Creator</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton}>
            <Text style={styles.optionText}>Custom Art</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton}>
            <Text style={styles.optionText}>Style Transfer</Text>
          </TouchableOpacity> */}
          <AiFeaturemodels />
        </ScrollView>

        {/* Avatars Section */}
        {/* <Text style={styles.sectionTitle}>Avatar</Text>
        <View style={styles.avatarGrid}>
          {[...Array(6)].map((_, index) => (
            <TouchableOpacity key={index} style={styles.avatarContainer}>
              <Image
                source={{
                  uri: avatar[index],
                }}
                style={styles.avatar}
              />
            </TouchableOpacity>
          ))}
        </View> */}

        <AvatarModels />

        {/* Gallery Section */}
        <Text style={styles.sectionTitle}>Recently Generated Images</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.imageGallery}>
          {[...Array(5)].map((_, index) => (
            <TouchableOpacity key={index} style={styles.galleryImageContainer}>
              <Image
                source={{
                  uri: `https://via.placeholder.com/200?text=Image+${index + 1}`,
                }}
                style={styles.galleryImage}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* User Tips Section */}
        <Text style={styles.sectionTitle}>User Tips</Text>
        <View style={styles.tipsContainer}>
          <Text style={styles.tip}>✨ Use short and descriptive prompts for better images.</Text>
          <Text style={styles.tip}>🎨 Explore "Style Transfer" for artistic effects.</Text>
          <Text style={styles.tip}>🔒 Save your creations directly to your device.</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 15,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    backgroundColor: '#FFF0DC',
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    color: '#333333',
    marginRight: 10,
  },
  generateButton: {
    backgroundColor: '#543A14',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  generateButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 10,
    marginTop: 10,
  },
  options: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  optionButton: {
    backgroundColor: '#543A14',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginRight: 10,
  },
  optionText: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  avatarGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  avatarContainer: {
    width: '48%',
    marginBottom: 15,
  },
  avatar: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  imageGallery: {
    marginBottom: 20,
  },
  galleryImageContainer: {
    marginRight: 10,
  },
  galleryImage: {
    width: 200,
    height: 150,
    borderRadius: 10,
  },
  tipsContainer: {
    backgroundColor: '#F5F5F5',
    padding: 15,
    borderRadius: 10,
  },
  tip: {
    fontSize: 14,
    color: '#333333',
    marginBottom: 5,
  },
});

export default PictifyAI;
