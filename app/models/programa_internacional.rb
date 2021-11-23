class ProgramaInternacional < ApplicationRecord
    # belongs_to :pai, :inverse_of => :programa_internacionals
    belongs_to :pai
    belongs_to :institucion
    has_many :estudiantes

    validates :nombre, presence: true, length: {maximum: 30}
    accepts_nested_attributes_for :pai
    accepts_nested_attributes_for :institucion

end
