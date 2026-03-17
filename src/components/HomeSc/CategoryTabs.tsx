import React from 'react';
import { ScrollView, TouchableOpacity, Text } from 'react-native';
import { CATEGORIES } from '../../theme';
import { C } from '../../theme';

interface Props {
  activeCategory: string;
  onSelect: (category: string) => void;
}

export default function CategoryTabs({ activeCategory, onSelect }: Props) {
  return (
    <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{ padding: 5 , maxHeight: 48,marginTop: 30,  }}
              contentContainerStyle={{ paddingHorizontal: 16, gap: 8,alignItems: 'center' }}
            >
              {CATEGORIES.map(cat => (
                <TouchableOpacity
                  key={cat}
                  style={[
                    { padding: 8, backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: 20, borderWidth: 1, borderColor: 'rgba(255,255,255,0.25)' },
                    activeCategory === cat && { backgroundColor: '#fff' }
                  ]}
                  onPress={() => onSelect(cat)}
                >
                  <Text style={[
                    { fontSize: 12, color: '#fff', fontFamily: 'Kanit_400Regular' },
                    activeCategory === cat && { color: C.btn, fontWeight: '600', fontFamily: 'Kanit_700Bold' }
                  ]}>
                    {cat}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
  );
};