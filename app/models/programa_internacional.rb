class ProgramaInternacional < ApplicationRecord
    # belongs_to :pai, :inverse_of => :programa_internacionals
    belongs_to :pai
    has_and_belongs_to_many :institucion
    has_many :estudiantes

    accepts_nested_attributes_for :pai

end
