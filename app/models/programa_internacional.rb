class ProgramaInternacional < ApplicationRecord
    belongs_to :pai
    has_and_belongs_to_many :institucion
    has_many :estudiantes

    accepts_nested_attributes_for :pai

end
