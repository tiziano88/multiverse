import React from "react";

interface ProfileProps {
  profile: Profile; // Assume Profile is a TypeScript type corresponding to your protobuf
  updateProfile: (updatedProfile: Profile) => void;
}

const ProfileComponent: React.FC<ProfileProps> = ({
  profile,
  updateProfile,
}) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    updateProfile({ ...profile, [field]: e.target.value });
  };

  const updateArticleInProfile = (updatedArticle: Article, index: number) => {
    const newArticles = [...profile.articles];
    newArticles[index] = updatedArticle;
    updateProfile({ ...profile, articles: newArticles });
  };

  return (
    <div>
      <input
        type="text"
        value={profile.name}
        onChange={(e) => handleChange(e, "name")}
        placeholder="Name"
      />
      <input
        type="text"
        value={profile.surname}
        onChange={(e) => handleChange(e, "surname")}
        placeholder="Surname"
      />
      <div>
        {profile.articles.map((article, index) => (
          <ArticleComponent
            key={article.uuid}
            article={article}
            updateArticle={(updatedArticle) =>
              updateArticleInProfile(updatedArticle, index)
            }
          />
        ))}
      </div>
    </div>
  );
};
