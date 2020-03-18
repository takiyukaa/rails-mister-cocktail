class Cocktail < ApplicationRecord
  has_one_attached :photo
  has_many :doses, dependent: :destroy
  has_many :ingredients, through: :doses

  validates :name, presence: true, uniqueness: true

  def photo_path
    if self.photo.attached?
      @path = self.photo.key
    else
      @path = ['YiYZiCX3Gp56WmN4ZNfzKp8n', 'FJxgWbLgmMLfmBp7u3xjAjsb', 'HBnqCUBU2XXNekM4pMAoBegi'].sample
    end
    @path
  end
end
